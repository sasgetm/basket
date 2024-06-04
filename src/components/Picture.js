function Picture(props) {

  return (
    <>
    <picture>
      {props.imgWebp2x && (
        <source type="image/webp" srcSet={`${props.imgWebp2x} 2x`} />
      )}
      {props.imgJpg2x && (
        <source type="image/jpg" srcSet={`${props.imgJpg2x} 2x`} />
      )}
      {props.imgPng2x && (
        <source type="image/png" srcSet={`${props.imgPng2x} 2x`} />
      )}
      {props.imgWebp && (
        <source type="image/webp" srcSet={props.imgWebp} />
      )}
      {props.imgJpg && (
        <source type="image/jpg" srcSet={props.imgJpg} />
      )}
      {props.imgPng && (
        <source type="image/png" srcSet={props.imgPng} />
      )}
      {props.imgJpg ? (
        <img src={props.imgJpg} alt={props.alt} />
      ) :
      props.imgPng ? (
        <img src={props.imgPng} alt={props.alt} />
      ) :
      props.imgJpg2x ? (
        <img src={props.imgJpg2x} alt={props.alt} />
      ) :
      (
        <img src={props.imgPng2x} alt={props.alt} />
      )}
    </picture>
    </>
  );
}

export default Picture;