function handleFlagEvent(ElementId, EventName) {
  switch(ElementId) {
    case 'indianFlag':
      // console.log(ElementId, EventName);
      if(EventName == 'mouseover') {
        document.getElementById('indCountryName').style["opacity"] = 1
        return
      }
      document.getElementById('indCountryName').style["opacity"] = 0
      break;
    case 'americanFlag':
      if(EventName == 'mouseover') {
        document.getElementById('usCountryName').style["opacity"] = 1
        return
      }
      document.getElementById('usCountryName').style["opacity"] = 0
      // console.log(ElementId, EventName);
      break;
    case 'canadianFlag':
      if(EventName == 'mouseover') {
        document.getElementById('cndCountryName').style["opacity"] = 1
        return
      }
      document.getElementById('cndCountryName').style["opacity"] = 0
      // console.log(ElementId, EventName);
      break
    default:
      break;
  }
}
