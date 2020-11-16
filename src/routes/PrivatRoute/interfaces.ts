import React from 'react';

export interface ProtectedRouteInterface {
  component: React.ComponentType;
  path: string;
}
