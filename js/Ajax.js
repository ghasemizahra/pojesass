const selected_inDate=new Date($('.inDate input').val()).getTime()
const selected_outDate=new Date($('.outDate input').val()).getTime()
const selected_rooms=$('.numberRoom input').val()
$.ajax({
    type:"Get",
    url:"./json/rooms.json",
    success:(resualt)=>{
        resualt.forEach(item => {
            const item_inDate=new Date(item.form).getTime()
            const item_outDate=new Date(item.to).getTime()
            let newClass=''
            if(selected_outDate > selected_inDate && selected_inDate >= item_inDate
                 && selected_outDate <= item_outDate && selected_rooms == item.bed){
                     newClass ='class=allowed'
                 }
                 let newTr= `<tr ${newClass}>
                 <td>${item.form}</td>
                 <td>${item.to}</td>
                 <td>${item.room}</td>
                 <td>${item.bed}</td>
                 </tr>`
                 $('.tBody').append(newTr)
        });
        $('body').css({'overflow-y':'hidden','background-color':'rgba(0,0,0,0.4)'})
        $('section.modal').css({'display':'block'})
        $('.dateForm').submit(function(e){
            e.preventDefault()
            getDateInfo()
        })
        $('body').click(function(){
          
            $('body').css({'overflow-y':'scroll','backgroundcolor':'#f4f4f4'})
            $('section.modal').css({'display':'non'})
            $('.tBody').empty()
        })
    },
    error:(err)=>console.log(err)
})

