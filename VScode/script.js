// Add event listener for real-time input on the form
 document.getElementById('feedbackForm').addEventListener('input' ,
    function(){
        // Get input values
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback').value;

        //Display live preview of the feedback
        document.getElementById('liveFeedback').innerHTML = `
           <h4>Preview:</h4>
          <p><strong>${name}</strong>: ${feedback}</p>
        
        ` ;
});