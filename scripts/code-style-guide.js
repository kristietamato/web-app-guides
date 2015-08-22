var buttonGeneral = document.getElementById('button-general');

buttonGeneral.onclick = function()
{
  var div = document.getElementById('open-close-general');
  if (div.style.display !== 'none')
  {
     div.style.display = 'none';
  }
  else
  {
     div.style.display = 'block';
  }
};

var buttonCoder = document.getElementById('button-coder');

buttonCoder.onclick = function()
{
  var div = document.getElementById('open-close-coder');
  if (div.style.display !== 'none')
  {
     div.style.display = 'none';
  }
  else
  {
     div.style.display = 'block';
  }
};