var buttonGeneral = document.getElementById('button-general');
var buttonHTML = document.getElementById('button-html');
var buttonCSS = document.getElementById('button-css');
var buttonJS = document.getElementById('button-js');

function openClose(div, icon)
{
  if (div.style.display !== 'none')
  {
     div.style.display = 'none';
     document.getElementById(icon).className = "fa fa-plus-square-o";
  }
  else
  {
     div.style.display = 'block';
     document.getElementById(icon).className = "fa fa-minus-square-o";
     
  }
}

buttonGeneral.onclick = function()
{
  var divGeneral = document.getElementById('open-close-general');
  var iconGeneral = 'toc-icon-general';
  openClose(divGeneral, iconGeneral);
}

buttonHTML.onclick = function()
{
  var divHTML = document.getElementById('open-close-html');
  var iconHTML = 'toc-icon-html';
  openClose(divHTML, iconHTML);
}

buttonCSS.onclick = function()
{
  var divCSS = document.getElementById('open-close-css');
  var iconCSS= 'toc-icon-css';
  openClose(divCSS, iconCSS);
}

buttonJS.onclick = function()
{
  var divJS = document.getElementById('open-close-js');
  var iconJS = 'toc-icon-js';
  openClose(divJS, iconJS);
}