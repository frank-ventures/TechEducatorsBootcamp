"use client";
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "./Switch.css";

const SwitchDemo = () => (
  <form>
    <div
      className="bg-slate-100"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Bog standard switcher!
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
