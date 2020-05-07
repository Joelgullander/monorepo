import React from 'react';
import {
  CommentsIcon,
  PlusIcon,
  DownSmallArrowIcon,
  CloseIcon,
  SearchIcon,
  LeftArrowIcon,
  RightArrowIcon,
  AlertCircleIcon,
  FolderIcon,
  OpenFolderIcon,
  CircleCheckedIcon,
  CircleCloseIcon,
  GlobeIcon,
  HiabIcon,
  CircleQuestionIcon,
  RightSmallArrowIcon,
  ForestlyCranB,
  ForestlyCranW,
  HookliftSkiploaderB,
  HookliftSkiploaderW,
  LoaderCraneB,
  LoaderCraneW,
  RecyclingCraneB,
  RecyclingCraneW,
  TailliftB,
  TailliftW,
  TruckMountedB,
  TruckMountedW
} from '../assets';

export enum Name {
  PLUS = 'plus',
  COMMENTS = 'comments',
  DOWN_SMALL_ARRROW = 'downSmallArrow',
  CLOSE = 'close',
  SEARCH = 'search',
  LEFT_ARROW = 'leftArrow',
  RIGHT_ARROW = 'rightArrow',
  ALERT_CIRCLE = 'alertCircle',
  FOLDER = 'folder',
  OPEN_FOLDER = 'openFolder',
  CIRCLE_CHECKED = 'circleChecked',
  CIRCLE_CLOSE = 'circleClose',
  GLOBE = 'globe',
  HIAB = 'hiab',
  CIRCLE_QUESTION = 'circleQuestion',
  RIGHT_SMALL_ARROW = 'rightSmallArrow',
  FORESTLY_CRAN_B = 'forestlyCranB',
  FORESTLY_CRAN_W = 'forestlyCranW',
  HOOKLIFT_SKIPLOADER_B = 'hookliftSkiploaderB',
  HOOKLIFT_SKIPLOADER_W = 'hookliftSkiploaderW',
  LOADER_CRANE_B = 'loaderCraneB',
  LOADER_CRANE_W = 'loaderCraneW',
  RECYCLING_CRANE_B = 'recyclingCraneB',
  RECYCLING_CRANE_W = 'recyclingCraneW',
  TAILLIFT_B = 'tailliftB',
  TAILLIFT_W = 'tailliftW',
  TRUCK_MOUNTED_B = 'truckMountedB',
  TRUCK_MOUNTED_W = 'truckMountedW',
};


export interface IIcon {
  name: Name,
  width?: string,
  height?: string,
  color?: string,
};

const IconsWrapper: React.FC<IIcon> = ({ name, ...props }) => {
  switch (name) {
    case Name.PLUS:
      return <PlusIcon {...props} />;
    case Name.COMMENTS:
      return <CommentsIcon {...props} />;
    case Name.DOWN_SMALL_ARRROW:
      return <DownSmallArrowIcon {...props} />;
    case Name.CLOSE:
      return <CloseIcon {...props} />;
    case Name.SEARCH:
      return <SearchIcon {...props} />;
    case Name.LEFT_ARROW:
      return <LeftArrowIcon {...props} />;
    case Name.RIGHT_ARROW:
      return <RightArrowIcon {...props} />;
    case Name.ALERT_CIRCLE:
      return <AlertCircleIcon {...props} />
    case Name.FOLDER:
      return <FolderIcon {...props} />
    case Name.OPEN_FOLDER:
      return <OpenFolderIcon {...props} />
    case Name.CIRCLE_CHECKED:
      return <CircleCheckedIcon {...props} />
    case Name.CIRCLE_CLOSE:
      return <CircleCloseIcon {...props} />
    case Name.GLOBE:
      return <GlobeIcon {...props} />
    case Name.HIAB:
      return <HiabIcon {...props} />
    case Name.CIRCLE_QUESTION:
      return <CircleQuestionIcon {...props} />
    case Name.RIGHT_SMALL_ARROW:
      return <RightSmallArrowIcon {...props} />
    case Name.FORESTLY_CRAN_B:
      return <ForestlyCranB {...props} />
    case Name.FORESTLY_CRAN_W:
      return <ForestlyCranW {...props} />
    case Name.HOOKLIFT_SKIPLOADER_B:
      return <HookliftSkiploaderB {...props} />
    case Name.HOOKLIFT_SKIPLOADER_W:
      return <HookliftSkiploaderW {...props} />
    case Name.LOADER_CRANE_B:
      return <LoaderCraneB {...props} />
    case Name.LOADER_CRANE_W:
      return <LoaderCraneW {...props} />
    case Name.RECYCLING_CRANE_B:
      return <RecyclingCraneB {...props} />
    case Name.RECYCLING_CRANE_W:
      return <RecyclingCraneW {...props} />
    case Name.TAILLIFT_B:
      return <TailliftB {...props} />
    case Name.TAILLIFT_W:
      return <TailliftW {...props} />
    case Name.TRUCK_MOUNTED_B:
      return <TruckMountedB {...props} />
    case Name.TRUCK_MOUNTED_W:
      return <TruckMountedW {...props} />
    default:
      return <PlusIcon {...props} />
  }
};

export const Icon: React.FC<IIcon> = (props) => {
  return (
    <IconsWrapper {...props} />
  );
};

Icon.defaultProps = {
  width: '25px',
  height: '25px',
  color: '#000',
};
