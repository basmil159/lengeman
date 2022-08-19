export const Svgs = (props) => {
    return (
        <svg class={props.title}>
                  <use xlinkHref={`img/blackbox.svg#${props.icon}`}></use>
                </svg>
                );
};