"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

type UuidContextType = {
  uuid: string | null;
};

const UuidContext = createContext<UuidContextType | undefined>(undefined);

export function UuidProvider({ children }: { children: React.ReactNode }) {
  const [uuid, setUuid] = useState<string | null>(null);

  useEffect(() => {
    let cookieUuid = Cookies.get("myUuid");

    if (!cookieUuid) {
      cookieUuid = uuidv4();
      Cookies.set("myUuid", cookieUuid, { expires: 7 });
    }

    setUuid(cookieUuid);
  }, []);

  return (
    <UuidContext.Provider value={{ uuid }}>{children}</UuidContext.Provider>
  );
}

export function useUuid() {
  const context = useContext(UuidContext);
  if (context === undefined) {
    throw new Error("useUuid must be used within a UuidProvider");
  }
  return context;
}
