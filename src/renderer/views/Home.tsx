/* eslint-disable react/button-has-type */
import '../App.css';

type PropsBoton = {
  link: string;
  name: string;
};
function BotonReusable({ link, name }: PropsBoton) {
  return (
    <div>
      <button>
        <a href={link}>{name}</a>
      </button>
    </div>
  );
}

export default BotonReusable;
