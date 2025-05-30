import { forwardRef } from 'react';
import { Group, Text } from 'react-konva';
import { ShapeProps } from '../shape.model';
import { ShapeSizeRestrictions, ShapeType } from '@/core/model';
import { fitSizeToShapeSizeRestrictions } from '@/common/utils/shapes/shape-restrictions';
import { useShapeProps } from '../../shapes/use-shape-props.hook';
import { BASIC_SHAPE } from '../front-components/shape.const';
import { useGroupShapeProps } from '../mock-components.utils';
import { useResizeOnFontSizeChange } from './front-text-hooks/resize-fontsize-change.hook';

const heading1SizeRestrictions: ShapeSizeRestrictions = {
  minWidth: 40,
  minHeight: 20,
  maxWidth: -1,
  maxHeight: -1,
  defaultWidth: 150,
  defaultHeight: 25,
};

export const getHeading1SizeRestrictions = (): ShapeSizeRestrictions =>
  heading1SizeRestrictions;

const shapeType: ShapeType = 'heading1';

export const Heading1Shape = forwardRef<any, ShapeProps>((props, ref) => {
  const {
    x,
    y,
    width,
    height,
    id,
    onSelected,
    text,
    otherProps,
    ...shapeProps
  } = props;
  const restrictedSize = fitSizeToShapeSizeRestrictions(
    heading1SizeRestrictions,
    width,
    height
  );
  const { width: restrictedWidth, height: restrictedHeight } = restrictedSize;

  const {
    textColor,
    textDecoration,
    fontStyle,
    fontVariant,
    fontSize,
    textAlignment,
  } = useShapeProps(otherProps, BASIC_SHAPE);

  const commonGroupProps = useGroupShapeProps(
    props,
    restrictedSize,
    shapeType,
    ref
  );

  useResizeOnFontSizeChange(id, { x, y }, text, fontSize, fontVariant);

  return (
    <Group {...commonGroupProps} {...shapeProps}>
      <Text
        x={0}
        y={0}
        width={restrictedWidth}
        height={restrictedHeight}
        text={text}
        fontFamily={BASIC_SHAPE.DEFAULT_FONT_FAMILY}
        fontSize={fontSize}
        fill={textColor}
        align={textAlignment}
        verticalAlign="middle"
        ellipsis={true}
        wrap="none"
        fontStyle={fontStyle}
        fontVariant={fontVariant}
        textDecoration={textDecoration}
      />
    </Group>
  );
});

export default Heading1Shape;
