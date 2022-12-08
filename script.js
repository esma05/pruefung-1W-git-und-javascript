
// Kommentiere hier (b)
// Kommentar hier: DieDocument-MethodequerySelector()gibt das ersteElementinnerhalb des Dokuments zurück, das mit dem angegebenen Selektor oder Gruppe von Selektoren. Wenn keine Übereinstimmungen gefunden werden, wird zurückgegeben.
const svg = document.querySelector("#svg-field")

let running = false

function start() {

    running = true
    window.requestAnimationFrame(animationLoop)
}
function stop() {

    running = false
    window.requestAnimationFrame(animationLoop)
}


function animationLoop() {
    
    // Kommentiere hier (c) 
    // Erstellt ein Element mit dem angegebenen Namespace-URI und dem angegebenen qualifizierten Namen.Ihr zum beispiel ein Kreis.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Da kann man die Eigenschaften von einem Objekt machen also einsetzen. Welche Farbe und schnell es geht und die es geht.Um den aktuellen Wert eines Attributs abzurufen, verwenden Sie getAttribute();.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    //Sie können es bevorzugen, wenn Ihr Knoten ein Element ist.
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // Code um zuerkennen wie eine Aminationsfarmes aufgeführt wird.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}