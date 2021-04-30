import * as React from 'react';

const navigationRef: any = React.createRef();
const isReadyRef = React.createRef();

const navigate = (name: string, params?: any) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.navigate(name, params);

const dispatch = (params: any) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.dispatch(params);

const getRootState = () =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.getRootState();

export {getRootState,dispatch,navigate,navigationRef,isReadyRef}
