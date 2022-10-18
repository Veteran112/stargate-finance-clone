import { SelectOption, SelectProps } from "@config/types";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";
import { AiOutlineCaretDown } from "react-icons/ai";
import { cx } from "@utils";
import { useClickAway } from "react-use";

const Select = ({ options, onChange, value, label }: SelectProps) => {
  const clickAwayRef = useRef<any>(null);
  const [isOpen, setisOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);

  const onChangeHandler = (opt: SelectOption) => {
    onChange(opt);
    console.log({ opt });
    setisOpen(false);
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement);

  useClickAway(clickAwayRef, () => {
    setisOpen(false);
  });

  return (
    <div className="w-auto md:w-[184px]">
      <p className="mb-2.5 text-white">{label}</p>
      <div ref={clickAwayRef} className="relative">
        <div
          onClick={() => setisOpen((prev) => !prev)}
          className="flex items-center gap-3 justify-between p-3 bg-[#3C344B] hover:bg-[#2d2d2d] rounded-[0.75rem] border border-[#fff]/10 group cursor-pointer"
          ref={setReferenceElement}
        >
          <div className="flex items-center gap-2.5">
            {value?.icon && (
              <span className="shrink-0 w-[18px]">{value?.icon}</span>
            )}
            <p className="font-poppins">{value.label}</p>
          </div>

          <AiOutlineCaretDown
            size={13}
            className={cx(
              "text-[#666666] group-hover:text-[#999] duration-200",
              isOpen && "rotate-180",
            )}
          />
        </div>
        {/** Drop down --Start-- */}
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cx("w-full", !isOpen && "pointer-events-none")}
        >
          <div
            className={cx(
              "w-full min-w-[184px] bg-[#232323] rounded-[0.75rem] border border-[#323232] duration-200 origin-top overflow-hidden",
              isOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "pointer-events-none opacity-0 scale-90",
            )}
          >
            {options.map((opt, i) => {
              const isActive = opt.value === value.value;
              return (
                <div
                  key={i}
                  onClick={() => onChangeHandler(opt)}
                  className={cx(
                    "flex items-center gap-[10px] px-4 h-[42px] hover:bg-[#111] duration-150 cursor-pointer",
                    isActive && "bg-[#424242]",
                  )}
                >
                  {opt?.icon && (
                    <span className="shrink-0 w-[18px]">{opt?.icon}</span>
                  )}
                  <p>{opt.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/** Drop down --End-- */}
      </div>
    </div>
  );
};

export default Select;
