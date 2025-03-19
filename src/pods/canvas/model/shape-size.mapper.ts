// src/common/shape-utils/shapeSizeMap.ts
import { ShapeType, ShapeSizeRestrictions } from '@/core/model';
import {
  getButtonShapeSizeRestrictions,
  getCheckboxShapeSizeRestrictions,
  getComboBoxShapeSizeRestrictions,
  getDatepickerInputShapeSizeRestrictions,
  getHorizontalScrollBarShapeSizeRestrictions,
  getIconShapeSizeRestrictions,
  getInputShapeSizeRestrictions,
  getLabelSizeRestrictions,
  getListboxShapeSizeRestrictions,
  getProgressBarShapeSizeRestrictions,
  getRadioButtonShapeSizeRestrictions,
  // import all other necessary functions
  getSliderShapeSizeRestrictions,
  getTextAreaSizeRestrictions,
  getTimepickerInputShapeSizeRestrictions,
  getToggleSwitchShapeSizeRestrictions,
  getTooltipShapeSizeRestrictions,
  getVerticalScrollBarShapeSizeRestrictions,
  getChipShapeSizeRestrictions,
} from '@/common/components/mock-components/front-components';
import {
  getBrowserWindowShapeSizeRestrictions,
  getMobilePhoneShapeSizeRestrictions,
  getModalDialogShapeSizeRestrictions,
  getTabletShapeSizeRestrictions,
  // other imports
} from '@/common/components/mock-components/front-containers';
import {
  getTriangleShapeSizeRestrictions,
  getCircleShapeSizeRestrictions,
  getDiamondShapeSizeRestrictions,
  getImageShapeSizeRestrictions,
  getLargeArrowShapeSizeRestrictions,
  getHorizontalLineShapeRestrictions,
  getVerticalLineShapeRestrictions,
  getPostItShapeSizeRestrictions,
  getRectangleShapeSizeRestrictions,
  getStarShapeSizeRestrictions,
  // other imports
} from '@/common/components/mock-components/front-basic-shapes';
import {
  getAccordionShapeSizeRestrictions,
  getAppBarShapeSizeRestrictions,
  getAudioPlayerShapeSizeRestrictions,
  getBarChartShapeSizeRestrictions,
  getBreadcrumbShapeSizeRestrictions,
  getButtonBarShapeSizeRestrictions,
  getCalendarShapeSizeRestrictions,
  getHorizontalMenuShapeSizeRestrictions,
  getLineChartShapeSizeRestrictions,
  getMapChartShapeSizeRestrictions,
  getModalShapeSizeRestrictions,
  getPieChartShapeSizeRestrictions,
  getTableSizeRestrictions,
  getTabsBarShapeSizeRestrictions,
  getVerticalMenuShapeSizeRestrictions,
  getVideoPlayerShapeSizeRestrictions,

  // other imports
} from '@/common/components/mock-components/front-rich-components';
import {
  getHeading1SizeRestrictions,
  getHeading2SizeRestrictions,
  getHeading3SizeRestrictions,
  getNormaltextSizeRestrictions,
  getParagraphSizeRestrictions,
  getSmalltextSizeRestrictions,
  // other imports
} from '@/common/components/mock-components/front-text-components';

const getMultipleNodeSizeRestrictions = (): ShapeSizeRestrictions => ({
  minWidth: 0,
  minHeight: 0,
  maxWidth: -1,
  maxHeight: -1,
  defaultWidth: 0,
  defaultHeight: 0,
});

// Map associating each ShapeType with its size restriction function
const shapeSizeMap: Record<ShapeType, () => ShapeSizeRestrictions> = {
  multiple: getMultipleNodeSizeRestrictions,
  label: getLabelSizeRestrictions,
  combobox: getComboBoxShapeSizeRestrictions,
  input: getInputShapeSizeRestrictions,
  toggleswitch: getToggleSwitchShapeSizeRestrictions,
  textarea: getTextAreaSizeRestrictions,
  datepickerinput: getDatepickerInputShapeSizeRestrictions,
  button: getButtonShapeSizeRestrictions,
  progressbar: getProgressBarShapeSizeRestrictions,
  listbox: getListboxShapeSizeRestrictions,
  browser: getBrowserWindowShapeSizeRestrictions,
  mobilePhone: getMobilePhoneShapeSizeRestrictions,
  tablet: getTabletShapeSizeRestrictions,
  modalDialog: getModalDialogShapeSizeRestrictions,
  timepickerinput: getTimepickerInputShapeSizeRestrictions,
  rectangle: getRectangleShapeSizeRestrictions,
  videoPlayer: getVideoPlayerShapeSizeRestrictions,
  diamond: getDiamondShapeSizeRestrictions,
  horizontalLine: getHorizontalLineShapeRestrictions,
  verticalLine: getVerticalLineShapeRestrictions,
  accordion: getAccordionShapeSizeRestrictions,
  triangle: getTriangleShapeSizeRestrictions,
  postit: getPostItShapeSizeRestrictions,
  pie: getPieChartShapeSizeRestrictions,
  'horizontal-menu': getHorizontalMenuShapeSizeRestrictions,
  'vertical-menu': getVerticalMenuShapeSizeRestrictions,
  breadcrumb: getBreadcrumbShapeSizeRestrictions,
  map: getMapChartShapeSizeRestrictions,
  circle: getCircleShapeSizeRestrictions,
  star: getStarShapeSizeRestrictions,
  linechart: getLineChartShapeSizeRestrictions,
  heading1: getHeading1SizeRestrictions,
  heading2: getHeading2SizeRestrictions,
  heading3: getHeading3SizeRestrictions,
  normaltext: getNormaltextSizeRestrictions,
  smalltext: getSmalltextSizeRestrictions,
  paragraph: getParagraphSizeRestrictions,
  largeArrow: getLargeArrowShapeSizeRestrictions,
  radiobutton: getRadioButtonShapeSizeRestrictions,
  checkbox: getCheckboxShapeSizeRestrictions,
  icon: getIconShapeSizeRestrictions,
  bar: getBarChartShapeSizeRestrictions,
  image: getImageShapeSizeRestrictions,
  table: getTableSizeRestrictions,
  horizontalScrollBar: getHorizontalScrollBarShapeSizeRestrictions,
  calendar: getCalendarShapeSizeRestrictions,
  verticalScrollBar: getVerticalScrollBarShapeSizeRestrictions,
  modal: getModalShapeSizeRestrictions,
  tabsBar: getTabsBarShapeSizeRestrictions,
  appBar: getAppBarShapeSizeRestrictions,
  buttonBar: getButtonBarShapeSizeRestrictions,
  tooltip: getTooltipShapeSizeRestrictions,
  slider: getSliderShapeSizeRestrictions,
  audioPlayer: getAudioPlayerShapeSizeRestrictions,
  chip: getChipShapeSizeRestrictions,
};

export default shapeSizeMap;
