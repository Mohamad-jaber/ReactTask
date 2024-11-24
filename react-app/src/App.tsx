import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisability] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert
          onClose={() => {
            setAlertVisability(false);
          }}
        >
          alert : Hi 
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisability(true)}>
        Click Me 
      </Button>
    </div>
  );
}

export default App;

// in the above we use the two component alert and button




// you can test the list group by remove comment on this code and made the above with comment 


// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Tulkarm", "Nablus", "Gaza", "Jenen", "Ramallah"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
// export default App;

