import CustomPaging from "./CustomPaging";

export default function ImagesSlider(props) {
  console.log(props);
  return (<CustomPaging images = {props.details}/>);
}