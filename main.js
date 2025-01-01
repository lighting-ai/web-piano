import * as Tone from 'tone'

    const synth = new Tone.Synth().toDestination()
    const keys = document.querySelectorAll('.key')
    const touchbar = document.getElementById('touchbar')
    const keyMap = {
      'a': 'C4',
      'w': 'C#4',
      's': 'D4',
      'e': 'D#4',
      'd': 'E4',
      'f': 'F4',
      't': 'F#4',
      'g': 'G4',
      'y': 'G#4',
      'h': 'A4',
      'u': 'A#4',
      'j': 'B4'
    }

    const noteColors = {
      'C4': '#FF6B6B',
      'C#4': '#FFD166',
      'D4': '#06D6A0',
      'D#4': '#118AB2',
      'E4': '#073B4C',
      'F4': '#EF476F',
      'F#4': '#FFD166',
      'G4': '#06D6A0',
      'G#4': '#118AB2',
      'A4': '#073B4C',
      'A#4': '#EF476F',
      'B4': '#FF6B6B'
    }

    function playNote(note) {
      synth.triggerAttackRelease(note, '8n')
      const key = document.querySelector(`[data-note="${note}"]`)
      key?.classList.add('active')
      setTimeout(() => key?.classList.remove('active'), 200)

      // Add colorful note animation to touchbar
      const noteDisplay = document.createElement('div')
      noteDisplay.className = 'note-display'
      noteDisplay.textContent = note
      noteDisplay.style.color = noteColors[note]
      noteDisplay.style.left = `${Math.random() * 80 + 10}%`
      touchbar.appendChild(noteDisplay)
      setTimeout(() => noteDisplay.remove(), 2000)
    }

    keys.forEach(key => {
      key.addEventListener('mousedown', () => playNote(key.dataset.note))
    })

    document.addEventListener('keydown', (e) => {
      const note = keyMap[e.key]
      if (note) playNote(note)
    })
