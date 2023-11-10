window.addEventListener('load', function(){

  
  var doencaCheckbox = document.getElementById('doençaCheckbox');
  var doencaDropdown = document.getElementById('doençaDropdown');

  doencaCheckbox.addEventListener('change', function() {
    
    if (doencaCheckbox.checked) {
      doencaDropdown.style.display = 'flex';
    } 

    else {
      doencaDropdown.style.display = 'none';
    }
  });

  doencaDropdown.style.display = 'none';
});


window.addEventListener('load', function(){
  var contraceptivoCheckbox = document.getElementById('contraceptivoCheckbox');
  var questionContracep = document.getElementById('questionContracep');
  
  contraceptivoCheckbox.addEventListener('change', function() {
    
    if (contraceptivoCheckbox.checked) {
      questionContracep.style.display = 'flex';
    } 
    
    else {
      questionContracep.style.display = 'none';
    }
  });
  
  
  questionContracep.style.display = 'none';
});

