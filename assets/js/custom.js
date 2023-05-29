

document.getElementById("sendMessage").addEventListener("click", function(event){
    event.preventDefault()
  });

function sendMail() {

    let name =" "+ document.getElementById('name').value
    let subject = "New message from "+name


    let array = [];

    for (let i = 1; i <= 6; i++) {
        let opt = document.getElementById('opt-'+i)
        if(opt.checked)
            array.push(opt.value)
    }
    
    let body = "Your message here...\n\n\n\n\n\n";

    if(array.length>0){
        body += "Requested services:"
        array.forEach(element => {
            body += " "+element+";"
        });
    }

    window.location.href = "mailto:leonardo.henriques16@gmail.com?subject="+subject+"&body=" + encodeURIComponent(body)

  }