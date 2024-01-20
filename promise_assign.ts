// function asyncfunc(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     //  an asynchronous Function
//     setTimeout(() => {
//       const success = false; // check success or failure

//       if (success) {
//         resolve("Data successfully Received!");
//       } else {
//         const error = new Error("Failed to Receive data");
//         reject(error);
//       }
//     }, 2000); //  adding a delay of 2 second
//   });
// }

// // Using the Promise with error handling
// asyncfunc()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

function asyncfunc(callback: (result: string | null, error: Error | null) => void): void {
  //  an asynchronous Function
  setTimeout(() => {
    const success = true; // check success or failure

    if (success) {
      callback("Data Received successfully !", null);
    } else {
      const error = new Error("Failed to receive data");
      callback(null, error);
    }
  }, 2000); // A delay of 2 second
}

//  callback function
asyncfunc((result, error) => {
  if (result) {
    console.log(result);
  } else {
    console.error("Error:", error?.message);
  }
});
