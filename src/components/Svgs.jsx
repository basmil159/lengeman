export const Svgs = (props) => {
    return (
        <svg class={props.title}>
                  <use xlinkHref={process.env.PUBLIC_URL + `/img/blackbox.svg#${props.icon}`}></use>
                </svg>
                );
};