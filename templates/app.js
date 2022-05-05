async function getTexi() {
  let data = await fetch(
    "https://data.cityofchicago.org/resource/wrvz-psew.json?company=0118 - 42111 Godfrey S.Awir&$limit=1"
  );
  let parsedData = await data.json();
  console.log(parsedData);
}
getTexi();
