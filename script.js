
let InterList = [];
let RejectedList = [];
let currentChange = 'all';
// step 1

let total = document.getElementById('total');
let Interview = document.getElementById('Interview');
let Rejected = document.getElementById('Rejected');
let jobCount = document.getElementById('job-count')

let allFilterBtn = document.getElementById('all-filter-btn');
let InterviewFilterBtn = document.getElementById('Interview-filter-btn');
let RejectedFilterBtn = document.getElementById('Rejected-filter-btn');

const allCards = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filterd-section');
const deleteBtn = document.getElementById('.delete');
for(let del of deleteBtn){
    del.addEventListener('click',function(e){
     e.target.parentNode.parentNode.remove( e.target.parentNode.parentNode)
    })
        
    

}

function calculateCount(){
    total.innerText = allCards.children.length;
    jobCount.innerText = allCards.children.length + " "+'jobes';
   
    Interview.innerText = InterList.length;
    Rejected.innerText = RejectedList.length;
   
}
calculateCount();

function toggleStyle(id){

   
    
    allFilterBtn.classList.remove('bg-primary','text-white')
    InterviewFilterBtn.classList.remove('bg-primary','text-white')
    RejectedFilterBtn.classList.remove('bg-primary','text-white')

    allFilterBtn.classList.add('bg-gray-300','text-black')
    InterviewFilterBtn.classList.add('bg-gray-300','text-black')
    RejectedFilterBtn.classList.add('bg-gray-300','text-black')
    
    
    const selact= document.getElementById(id)
    selact.classList.remove('bg-gray-300','text-black')
    selact.classList.add('bg-primary','text-white')
    // step 4 filtarig
    currentChange =id;
     if(id == 'Interview-filter-btn'){
            allCards.classList.add('hidden');
            RenderingInterview()
            filterSection.classList.remove('hidden')
           
            jobCount.innerText =InterList.length  + "/8 "+'jobes'; 
        }
         else if(id =='all-filter-btn'){
        allCards.classList.remove('hidden')
        filterSection.classList.add('hidden')
       
          jobCount.innerText = allCards.children.length + " "+'jobes';
}
 else if(id == 'Rejected-filter-btn'){
    if(id == 'Rejected-filter-btn'){
       allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
         jobCount.innerText =RejectedList.length  + "/8 "+'jobes';
         RenderingRejected()
    } 
       

    }}
// step 1 fenish

//step 2
mainContainer.addEventListener('click',function(event){
   if(event.target.classList.contains('Interview-btn')){
      const parentNode = event.target.parentNode.parentNode;
   const mobile= parentNode.querySelector('.mobile').innerText;
   const react = parentNode.querySelector('.react').innerText;
   const remote = parentNode.querySelector('.remote').innerText;
   const fullTime = parentNode.querySelector('.fullTime').innerText;
   const change = parentNode.querySelector('.change').innerText;
   parentNode.querySelector('.change').innerText ='Interview'

    const cardInfo = {
    mobile,
    react,
    remote,
    fullTime,
    change :'Interview'
   }

   const InterviewExist = InterList.find(item => item.mobile == cardInfo.mobile);

   if(!InterviewExist){
    InterList.push(cardInfo)
    
    }
    RejectedList = RejectedList.filter(item => item.mobile != cardInfo.mobile)
     if(currentChange == 'Rejected-filter-btn'){
       RenderingRejected()
        // RenderingInterview()
    }
    // step 2 fenesh
    calculateCount()
} 
else if(event.target.classList.contains('Rejected-btn')){
  const parentNode = event.target.parentNode.parentNode;
   const mobile= parentNode.querySelector('.mobile').innerText;
   const react = parentNode.querySelector('.react').innerText;
   const remote = parentNode.querySelector('.remote').innerText;
   const fullTime = parentNode.querySelector('.fullTime').innerText;
   const change = parentNode.querySelector('.change').innerText;
   parentNode.querySelector('.change').innerText ='Rejected'

    const cardInfo = {
    mobile,
    react,
    remote,
    fullTime,
    change :'Rejected'
   }

   const RejectedExist = RejectedList.find(item => item.mobile == cardInfo.mobile);

   if(!RejectedExist){
    RejectedList.push(cardInfo)
    
    }
    InterList = InterList.filter(item => item.mobile != cardInfo.mobile)
    if(currentChange == 'Interview-filter-btn'){
        RenderingInterview()
    }
    // RenderingRejected();
    calculateCount();
}
});

// step 3 create html file
function RenderingInterview(){
    filterSection.innerHTML = '';

    for( let Interview of InterList){
        const div = document.createElement('div');
        div.className = 'flex justify-between p-8 border'
        div.innerHTML = `
        <div class="space-y-4">
                <div>
                    <p class="mobile font-bold">${Interview.mobile} </p>
                    <p class="react">React Native Developer</p>
                </div>
                <div class="flex gap-2">
                    <p class="remote">Remote • $130,000</p>
                    <p class="fullTime">• Full-time - $175,000</p>
                    <!-- <p class="remote-money">• $130,000 </p> -->
                    <!-- <p class="full-money">- $175,000</p> -->
                </div>
                <div>
                 <p class="change">${Interview.change}</p>  
                </div>
                <div class="flex gap-2">
                    <button class="Interview-btn btn border-2 border-green-600 text-green-500 px-4 py">Interview</button>
                    <button class="Rejected-btn btn border-2  border-red-600 px-4 text-red-600">Rejected</button>
                </div>
            </div>
            <!-- part 2 -->
            <div>
               <button class="delete "><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `
        filterSection.appendChild(div)
       
    }
}


function RenderingRejected(){
    filterSection.innerHTML = '';

    for( let Rejected of RejectedList){
        const div = document.createElement('div');
        div.className = 'flex justify-between p-8 border'
        div.innerHTML = `
        <div class="space-y-4">
                <div>
                    <p class="mobile font-bold">${Rejected.mobile} </p>
                    <p class="react">React Native Developer</p>
                </div>
                <div class="flex gap-2">
                    <p class="remote">Remote • $130,000</p>
                    <p class="fullTime">• Full-time - $175,000</p>
                    <!-- <p class="remote-money">• $130,000 </p> -->
                    <!-- <p class="full-money">- $175,000</p> -->
                </div>
                <div>
                 <p class="change">${Rejected.change}</p>  
                </div>
                <div class="flex gap-2">
                    <button class="Interview-btn btn border-2 border-green-600 text-green-500 px-4 py">Interview</button>
                    <button class="Rejected-btn btn border-2  border-red-600 px-4 text-red-600">Rejected</button>
                </div>
            </div>
            <!-- part 2 -->
            <div>
               <button class="delete "><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `
        filterSection.appendChild(div)
       
    }
}


console.log('sdfkjsdhfkjsd')