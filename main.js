javascript:(function() {
    console.log('Hello, Bookmarklet!');
    var c = Array.from(document.querySelectorAll("tbody > tr")) ,
        e = 0 ,
        b = 0
        c = Array.from(document.querySelectorAll("tbody > tr")).filter( tr => !tr.textContent.includes('Shipping Protection'))
    async function performAsyncOperation(item){
        console.log('c item', item);
        return new Promise( (resolve , reject) => {
            item.querySelector("td:nth-child(1) > div > div:nth-child(2) > span > span > button").click()
            setTimeout(function(){
                let discoutTypeSelects = document.querySelectorAll("select")
                discoutTypeSelects.forEach( select => {
                    f = Object.getOwnPropertyDescriptor(select.__proto__, "value").set
                    g = new Event("change", {
                        bubbles: !0
                    });
                    f.call(select, 'PERCENTAGE') 
                    select.dispatchEvent(g)
                })
                resolve(`resolved select  item ${item}`)
            },2000)
        })

    }
    async function performInputAsyncOperation(item){
        return new Promise( (resolve , reject) => {
            setTimeout(function(){
                let discoutInputs = document.querySelectorAll('div[role="dialog"] input[type="number"]')
                discoutInputs.forEach( input => {
                    b = Object.getOwnPropertyDescriptor(input.__proto__, "value").set
                    c = new Event("input", {
                        bubbles: !0
                    });
                    b.call(input, 35) 
                    input.dispatchEvent(c)                   
                })
                resolve(`resolved input item ${item}`)
            },2000)
        })
    }
    async function processArrayWithAsyncOperation(arr){
        try {
            for(const item of arr ){
                const result =  await performAsyncOperation(item)
                console.log(`Processed select item ${item} : ${result}`)
            }
            for(const item of arr ){    
                console.log('EYSDSFA')            
                const result1 =  await performInputAsyncOperation(item)                
                 console.log(`Processed input item ${item} : ${result1}`)
            }

        } catch (error) {
            console.log(error)
        }
    }
    processArrayWithAsyncOperation(c).then( () => {
        console.log('All async operation completed')
        let dialogs = document.querySelectorAll('div[role="dialog"]')
        dialogs.forEach( dialog => {
            // setTimeout(() => {
                let applyBtn = dialog.querySelector('div > div:nth-child(3) > div > div > div:nth-child(2) > button:nth-child(2)')
                if(applyBtn){
                    // applyBtn.click()
                }                
            // }, 4000);
            // console.log('sdsfa',d)
        })
    }).catch( error => {
        console.log(error)
    })
  })();