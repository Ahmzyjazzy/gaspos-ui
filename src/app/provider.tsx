"use client";

import { Provider } from "react-redux";
import store, { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
}
