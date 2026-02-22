let currentTab = "all";

let jobs = [
{ id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"all"},
{ id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"all"},
{ id:3, company:"DataViz Solutions", position:"Data Visualization Specialis", location:"Boston, MA ", type:"Full-time", salary:"$125,000 - $165,000", description:"Transform complex data into compelling visualizations.", status:"all"},
{ id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle", type:"Full-time", salary:"$140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"all"},
{ id:5, company:"Innovation Labs", position:"UI/UX Engineer", location:"Austin", type:"Full-time", salary:" $110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"all"},
{ id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York", type:"Full-time", salary:"$130,000 - $170,00", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"all"},
{ id:7, company:"StartupXYZ", position:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"$120,000 - $160,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"all"},
{ id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco", type:"Full-time", salary:" $130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"all"}
]

function renderJobs(){
  const container = document.getElementById("jobContainer")
  const empty = document.getElementById("emptyState")
  container.innerHTML = ""

  let filtered = currentTab === "all" ? jobs : jobs.filter(job => job.status === currentTab)

  document.getElementById("tabCount").innerText = `${filtered.length} of ${jobs.length} Jobs`

  if(filtered.length === 0){
    empty.classList.remove("hidden")
    return
  } else {
    empty.classList.add("hidden")
  }

  filtered.forEach(job => {
    // 1. Create the Badge that shows BETWEEN salary and description
    let statusBadge = "";
    if (job.status === 'interview') {
      statusBadge = `<div class="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 uppercase">✓ Interview Scheduled</div>`;
    } else if (job.status === 'rejected') {
      statusBadge = `<div class="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200 uppercase">✕ Application Rejected</div>`;
    }

    // 2. Permanent Description (Always rendered)
    const descriptionHTML = `
      <div class="mt-3 border-gray-100 rounded text-sm text-gray-600">
        ${job.description}
      </div>`;

    container.innerHTML += `
    <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-200 relative">
      <button onclick="deleteJob(${job.id})" class="absolute top-3 right-3 text-gray-300 hover:text-red-500"><i class="fa-solid fa-trash"></i></button>
      
      <h3 class="font-bold text-lg text-slate-800">${job.company}</h3>
      <p class="text-gray-600 font-medium">${job.position}</p>
      
      <div class="flex gap-4 text-xs text-gray-500 mt-1 uppercase tracking-wider">
        <span><i class="fa-solid fa-circle text-[6px]"></i> ${job.location}</span>
        <span><i class="fa-solid fa-circle text-[6px]"></i> ${job.type}</span>
        <span class="text-blue-600 font-bold"><i class="fa-solid fa-circle text-[6px]"></i> ${job.salary}</span>
      </div>
      

      ${statusBadge}

      ${descriptionHTML}

      <div class="flex gap-2 mt-4 pt-4 border-t border-gray-50">
        <button onclick="updateStatus(${job.id},'interview')" 
        class="px-4 py-1.5 text-xs rounded font-bold transition ${job.status==='interview'?'bg-green-600 text-white':'bg-gray-100 text-gray-600 hover:bg-green-50'}">
        INTERVIEW</button>

        <button onclick="updateStatus(${job.id},'rejected')" 
        class="px-4 py-1.5 text-xs rounded font-bold transition ${job.status==='rejected'?'bg-red-600 text-white':'bg-red-100 text-red-700 hover:bg-red-200'}">
        REJECTED</button>
      </div>
    </div>`
  })
}
//---------------------------------------
function updateStatus(id,status){
  jobs = jobs.map(job=>{
    if(job.id===id){
      if(job.status===status){
        job.status="all"
      }else{
        job.status=status
      }
    }
    return job
  })
  updateDashboard()
  renderJobs()
}

function deleteJob(id){
  const job = jobs.find(j=>j.id===id)
  jobs = jobs.filter(j=>j.id!==id)
  updateDashboard()
  renderJobs()
}

function updateDashboard(){
  document.getElementById("totalCount").innerText = jobs.length
  document.getElementById("interviewCount").innerText =
    jobs.filter(j=>j.status==="interview").length
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j=>j.status==="rejected").length
}

function switchTab(tab){
  currentTab=tab
  document.querySelectorAll(".tabBtn").forEach(btn=>{
    btn.classList.remove("bg-blue-600","text-white")
    btn.classList.add("bg-gray-200")
  })
  document.getElementById(tab+"Tab").classList.add("bg-blue-600","text-white")
  renderJobs()
}

updateDashboard()
renderJobs()