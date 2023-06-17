import { useEffect, useRef, useState } from "react";
//Lógica del customCursor.jsx , addEventListener para que el nuevo cursor siga al mouse
export const useCustomCursor = () => {

    const secondaryCursor = useRef(null); // ref del cursor secundario

    //position de referencia para luego comparar con la posición actual del mouse y que sean iguales para posicionar el secundary cursor
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });
    //Para asegurarme que el cursor está renderizado
    const [isCursorRendered, setIsCursorRendered] = useState(false);
    //se actualiza cuando el cursor se ha renderizado
    useEffect(() => {
        setIsCursorRendered(true);
    }, []);

    //*agrega un evento de escucha al documento para detectar la posición del mouse y actualizar la posición del cursor personalizado en consecuencia.
    useEffect(() => {
        if (isCursorRendered) {//si ya se renderizó se disparan los eventos
            document.addEventListener("mousemove", (event) => {
                const { clientX, clientY } = event;
                const mouseX = clientX;
                const mouseY = clientY;
                //clientWidth salta error porque el elemento aún no se renderizó y es null. Utilizando el operador &&, que solo ejecutará la segunda expresión si la primera es verdadera
                //Esto asegurará que la propiedad clientWidth solo se acceda si secondaryCursor.current no es null.
                positionRef.current.mouseX = mouseX - (secondaryCursor.current && secondaryCursor.current.clientWidth / 2 || 0);
                positionRef.current.mouseY = mouseY - (secondaryCursor.current && secondaryCursor.current.clientHeight / 2 || 0);

                setIsMouseMoving(true);//cuando se mueve el mouse se pone en true
            });
        }
        return () => { };
    }, [isCursorRendered]);//el listener de eventos solo después de que el cursor se haya renderizado

    //se llama a una función followMouse que se ejecuta de forma recursiva utilizando requestAnimationFrame para actualizar la posición del cursor personalizado.
    //* Window.requestAnimationFrame() es un método que informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
    // La posición del cursor personalizado se actualiza en función de la posición actual del mouse y su posición anterior. Se utiliza un factor de suavizado para hacer que la transición entre la posición actual y la anterior sea más suave.
    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;
            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if (
                    Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
            if (secondaryCursor && secondaryCursor.current)
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        followMouse();

        return () => {
            cancelAnimationFrame(positionRef.current.key);
        };
    }, []);


    //*Hacer que se esconda el cursor por inactividad de movimiento del mouse (2 segundos)
    const [isMouseMoving, setIsMouseMoving] = useState(true); //estado toggle si se mueve el mouse
    // se agrega un evento de escucha mousemove que actualiza el estado del isMouseMoving y reinicia un temporizador. Si el temporizador expira, se llama a la función handleMouseIdle, que establece el estado del isMouseMoving en false y oculta el secondary-cursor. El tiempo de espera se establece en 2 segundos
    useEffect(() => {
        let timeoutId;
        const handleMouseIdle = () => {
            setIsMouseMoving(false);
        };
        const handleMouseActive = () => {
            setIsMouseMoving(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleMouseIdle, 3000); // 2 segundos (2000 miliseg)
        };
        document.addEventListener("mousemove", handleMouseActive);
        return () => {
            document.removeEventListener("mousemove", handleMouseActive);

        };
    }, []);
    return { isMouseMoving, secondaryCursor }
}
