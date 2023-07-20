let setupWindowVisible = false;

function toggleSetupWindow() {
  const setupWindow = document.getElementById('setupWindow');
  const setupButton = document.getElementById('setupButton');

  if (setupWindowVisible) {
    setupWindow.style.display = 'none';
    setupButton.style.backgroundColor = '';
  } else {
    setupWindow.style.display = 'block';
    setupButton.style.backgroundColor = 'blue'; 
  }

  setupWindowVisible = !setupWindowVisible;
}

function closeSetupWindow() {
  const setupWindow = document.getElementById('setupWindow');
  setupWindow.style.display = 'none';
  setupButton.style.backgroundColor = '';
  setupWindowVisible = false;
}


let helpWindowVisible = false;

function toggleHelpWindow() {
  const helpWindow = document.getElementById('helpWindow');
  const helpButton = document.getElementById('helpButton');

  if (helpWindowVisible) {
    helpWindow.style.display = 'none';
    helpButton.style.backgroundColor = '';
  } else {
    helpWindow.style.display = 'block';
    helpButton.style.backgroundColor = 'blue'; 
  }

  helpWindowVisible = !helpWindowVisible;
}

function closeHelpWindow() {
  const helpWindow = document.getElementById('helpWindow');
  helpWindow.style.display = 'none';
  helpButton.style.backgroundColor = '';
  helpWindowVisible = false;
}

let patchWindowVisible = false;

function togglePatchWindow() {
  const patchWindow = document.getElementById('patchWindow');

  if (patchWindowVisible) {
    patchWindow.style.display = 'none';
  } else {
    patchWindow.style.display = 'block';
    closeSetupWindow();
  }

  patchWindowVisible = !patchWindowVisible;
}

function closePatchWindow() {
  const patchWindow = document.getElementById('patchWindow');
  patchWindow.style.display = 'none';
  patchWindowVisible = false;
}



let selectedSequence = null;
let selectedFixture = null;

  function typerFunction() {
    const input = document.getElementById('typerInput');
    const inputValue = input.value.trim();

    if (inputValue.toLowerCase().startsWith('goto')) {
      const sequenceName = inputValue.slice(5).trim();

      const sequences = document.querySelectorAll('.sequenceButton');
      const sequenceExists = Array.from(sequences).some(seq => seq.innerText === sequenceName);

      if (sequenceExists) {
        if (selectedSequence) {
          selectedSequence.classList.remove('selectedSequence');
        }

        const targetSequence = Array.from(sequences).find(seq => seq.innerText === sequenceName);
        targetSequence.classList.add('selectedSequence');
        selectedSequence = targetSequence;
      } else {
        alert(`Could not find this Sequence`)
      }
    } else if (inputValue.toLowerCase().startsWith('setup')) {
      toggleSetupWindow();

    } else if (inputValue.toLowerCase().startsWith('fixture')) {
      const fixtureID = inputValue.slice(7).trim();

      const ids = document.querySelectorAll('.fixtureButton');
      const idExists = Array.from(ids).some(id => id.innerText === fixtureID);

      if (idExists) {
        if (selectedFixture) {
          selectedFixture.classList.remove('selectedFixture');
        }

        const targetFixture = Array.from(ids).find(id => id.innerText === fixtureID);
        targetFixture.classList.add('selectedFixture');
        selectedFixture = targetFixture;
      } else {
        alert(`Could not find this Fixture`)
      }
    } else if (inputValue.toLowerCase().startsWith('clear')) {
      clearSequence();
    }
     else {
      alert(`Could not find the command '${inputValue}'`);
    }

    input.value = '';
  }

  function clearSequence() {
    if (selectedSequence) {
      selectedSequence.classList.remove('selectedSequence');
      selectedSequence = null;
    }
    clearFixtures();
  }

  function clearFixtures() {
    if (selectedFixture) {
      selectedFixture.classList.remove('selectedFixture');
      selectedFixture = null;
    }
  }


  function insertGoTo() {
    const input = document.getElementById('typerInput');
    input.value = 'goto ';
    input.focus();
  }


  function insertFixture() {
    const input = document.getElementById('typerInput');
    input.value = 'fixture ';
    input.focus();
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      typerFunction();
    }
  }

  function focusOnTypeBar() {
    const input = document.getElementById('typerInput');
    input.focus();
  }

  document.getElementById('typerInput').addEventListener('keydown', handleKeyPress);

function toggleDimmer() {
  // Soon 👀
}

function toggleBeam() {
  // Soon 👀
}

function togglePan() {
  // Soon 👀
}

function toggleTilt() {
  // Soon 👀
}

function toggleColor() {
  // Soon 👀
}

function toggleGobo() {
  // Soon 👀
}
