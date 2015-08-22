function openClose(div)
{
  if (div.style.display !== 'none')
  {
     div.style.display = 'none';
  }
  else
  {
     div.style.display = 'block';
  }
}

var buttonGeneral = document.getElementById('button-general');
buttonGeneral.onclick = function()
{
  var divGeneral = document.getElementById('open-close-general');
  openClose(divGeneral);
};

var buttonHTML = document.getElementById('button-html');
buttonHTML.onclick = function()
{
  var divHTML = document.getElementById('open-close-html');
  openClose(divHTML);
};

var buttonCSS = document.getElementById('button-css');
buttonCSS.onclick = function()
{
  var divCSS = document.getElementById('open-close-css');
  openClose(divCSS);
};

var buttonJS = document.getElementById('button-js');
buttonJS.onclick = function()
{
  var divJS = document.getElementById('open-close-js');
  openClose(divJS);
};