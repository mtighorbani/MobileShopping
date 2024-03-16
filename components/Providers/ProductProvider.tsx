"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/utils/store/ProductStore/Store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

// Create a client
const queryClient = new QueryClient();

function ProductProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}

export default ProductProvider;
