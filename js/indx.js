$(document).ready(function(){
    peticion();
})

function peticion(){
    $.ajax({
        url: "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",
        type: "GET",
        success: function (response) {
                mostrar(response);
        },
        error: () => { //función error
            alert('Disculpe, existió un problema');
        }
    });
}
 function mostrar(response){
    var nameArray=[];
    response.civilizations.map(elem=>{
        class Army extends React.Component {
            render () {
              return (
                <div>
                  <p>Army Type: {elem.army_type}</p>
                </div>
              )
            }
          }
          class Civilization extends React.Component {
            render () {
              var bonus =[];
              elem.civilization_bonus.map(ele => {
                bonus.push(<p>Civilization Bonus: {ele}</p>)
              })
              return (
                <div>
                  {bonus}
                </div>
              )
            }
          }
          class Name extends React.Component {
            render () {
              return (
                <div>
                  <h2>Name: {elem.army_type}</h2>
                  <Army/>
                  <Civilization/>
                </div>
              )
            }
          }
          nameArray.push(<Name/>);
    })

    class Lista extends React.Component {
      render() {
        return (<div>{nameArray}</div>);
      }
  }
    
    ReactDOM.render(<Lista/>, document.getElementById('army'));
 }

 