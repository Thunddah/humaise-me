
window.runTerminateSequence = function() {
    const commandInput = document.getElementById("commandinput");
    const commandOutput = document.getElementById("commandoutput");
    const terminal = document.getElementById("terminal");
    const errorPage = document.getElementById("errorpage");
    const errorTitle = document.querySelector(".errortitle");
    const errorOutput = document.getElementById("erroroutput");
    const errorGif = document.getElementById("errorgif");


    commandInput.disabled = true;

    
    const finalMessage = document.createElement("div");
    finalMessage.style.whiteSpace = "pre-wrap";
    commandOutput.appendChild(finalMessage);

    const message = "IS IT THE END ALREADY...? ";
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            finalMessage.textContent += message[index];
            index++;

            terminal.scrollTop = terminal.scrollHeight;

            setTimeout(typeMessage, 100);
        } else {
            setTimeout(showCrash, 1000);
        }
    }

    function showCrash() {
      
        terminal.style.display = "none";

        errorPage.style.display = "flex";
        errorPage.style.position = "fixed";
        errorPage.style.inset = "0";
        errorPage.style.width = "100vw";
        errorPage.style.height = "100vh";
        errorPage.style.background = "white";
        errorPage.style.color = "black";
        errorPage.style.zIndex = "999999";

        
        errorTitle.style.color = "black";
        errorTitle.textContent =
            "YOU WEREN'T SUPPOSED TO SEE THAT.";

      
        errorOutput.style.color = "#8000a8";
        errorOutput.textContent =
            "MIND THE GAP...\n\n" +
            "TERMINATION REQUESTED\n\n" +
            "CONNECTION LOST\n" +
            "SYSTEM SHUTDOWN IN PROGRESS\n" +
            "MEMORY CORRUPTION DETECTED\n\n" +
            "IS IT THE END ALREADY...?";

        
        if (errorGif) {
            errorGif.style.filter = "grayscale(1)";
        }
    }

    typeMessage();
};
