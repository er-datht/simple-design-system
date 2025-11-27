import "./panel-image-double.css";

export type PanelImageDoubleProps = {
  leftImageSrc: string;
  rightImageSrc: string;
  className?: string;
};

export const PanelImageDouble = ({
  leftImageSrc,
  rightImageSrc,
  className = "",
}: PanelImageDoubleProps) => {
  return (
    <section
      className={`panel-image-double ${className}`}
      data-figma-node-id="2282:7374"
    >
      <div className="panel-image-double__container">
        <div
          className="panel-image-double__image-left"
          data-figma-node-id="2282:7377"
        >
          <img src={leftImageSrc} alt="" className="panel-image-double__img" />
        </div>
        <div
          className="panel-image-double__image-right"
          data-figma-node-id="2282:7378"
        >
          <img src={rightImageSrc} alt="" className="panel-image-double__img" />
        </div>
      </div>
    </section>
  );
};
