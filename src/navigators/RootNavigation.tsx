import * as React from 'react';

const navigationRef: any = React.createRef();

const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

const dispatch = (params: any) => {
  navigationRef.current?.dispatch(params);
};

const getRootState = () => {
  navigationRef.current?.getRootState();
};

export {getRootState, dispatch, navigate, navigationRef};
