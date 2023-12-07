const box = document.querySelector('.box')
const add = document.getElementById('add')
const newtask = document.getElementById('newtask')
const tasks = document.querySelector('.tasks')

add.addEventListener('click',()=>{
    const task_t=newtask.value
    if(!task_t){
        console.log('please add a task');
        return;
    }else{
        console.log(task_t);
        const task_box = document.createElement('div')
        task_box.classList.add('task')
        //span
        const task_span = document.createElement('span')
        //done btn
        const done_btn = document.createElement('button')
        done_btn.setAttribute('id','done')
        done_btn.innerText='Done'
        done_btn.style.backgroundColor='green'
        done_btn.style.color='white'
        //done delete btn
        const delete_btn = document.createElement('button')
        delete_btn.setAttribute('id','delete')
        delete_btn.innerText='Delete'
        delete_btn.style.backgroundColor='red'
        delete_btn.style.color='white'
        task_box.appendChild(task_span)
        task_box.appendChild(done_btn)
        task_box.appendChild(delete_btn)
        tasks.appendChild(task_box)
        task_span.innerText=task_t
        delete_btn.addEventListener('click',()=>{
            tasks.removeChild(task_box)
        })

        done_btn.addEventListener('click',()=>{
            task_span.style.textDecoration='line-through';
            task_span.style.color = 'white';
            task_span.style.backgroundColor = '#e98dbf'
            task_box.style.borderLeft='4px solid pink'
        })

        task_box.addEventListener('mouseover',()=>{
            task_box.style.backgroundColor='#d3ffd0'
            
        })
        task_box.addEventListener('mouseout',()=>{
            task_box.style.backgroundColor='transparent'
            
        })

        
    }
    
    newtask.value = ''
})