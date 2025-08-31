// export default function TabButton(props){
//     return (
//         <button>{props.children}</button>
//     );
// }

export default function TabButton({label}){
    function handleClick(){
        console.log('Hello World!');
    }
    return (
        <button onClick={handleClick}>{label}</button>
    );
}