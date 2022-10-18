import { useHeaderHeight } from "@atoms";
import Logo from "@components/Svgs/Logo";
import { headerNavigationItems } from "@config/constants";
import { cx } from "@utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Header() {
  const router = useRouter();
  const { connectAsync } = useConnect()
  const [, setHeaderHeight] = useHeaderHeight();
  const headerRef = useRef<HTMLDivElement>(null!);
  const connectMetamask = async() => {
    console.log('click')
    const { account, chain } = await connectAsync({ connector: new InjectedConnector() })
    const userData = { address: account, chain: chain.id }
    const user_address = userData.address
    localStorage.setItem("address", user_address)
  }
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, [setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full flex items-center pt-8 pb-5 px-5 lg:px-[60px] z-[999] bg-black"
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href={"/"}>
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {headerNavigationItems.map(({ text, url }, i) => {
              const isActive = router.pathname.startsWith(url);
              return (
                <li key={i} className="px-[1.25rem]">
                  <Link href={url}>
                    <a
                      className={cx(
                        "font-poppins font-medium block",
                        isActive
                          ? "text-primary"
                          : "text-[#929292] hover:text-white",
                      )}
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <button className="bg-primary duration-200 font-poppins text-white py-2 px-4 rounded-xl flex items-center gap-2" onClick={() => connectMetamask()}>
            <svg
              width={16}
              height={14}
              className="shrink-0"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3267 4.28635H15.5C15.5 1.73844 13.9733 0.25 11.3867 0.25H4.61333C2.02667 0.25 0.5 1.73844 0.5 4.25385V9.74615C0.5 12.2616 2.02667 13.75 4.61333 13.75H11.3867C13.9733 13.75 15.5 12.2616 15.5 9.74615V9.51216H12.3267C10.8539 9.51216 9.66 8.34814 9.66 6.91225C9.66 5.47637 10.8539 4.31235 12.3267 4.31235V4.28635ZM12.3267 5.40431H14.94C15.2493 5.40431 15.5 5.64875 15.5 5.95029V7.84822C15.4964 8.14829 15.2478 8.39069 14.94 8.3942H12.3867C11.6411 8.40398 10.9891 7.90628 10.82 7.19824C10.7353 6.75872 10.8542 6.30517 11.1448 5.95916C11.4354 5.61315 11.868 5.41006 12.3267 5.40431ZM12.44 7.39974H12.6867C13.0033 7.39974 13.26 7.14947 13.26 6.84076C13.26 6.53204 13.0033 6.28178 12.6867 6.28178H12.44C12.2886 6.28004 12.1427 6.33748 12.035 6.44128C11.9273 6.54508 11.8667 6.6866 11.8667 6.83426C11.8666 7.14404 12.1223 7.39617 12.44 7.39974ZM4.05333 4.28635H8.28667C8.60331 4.28635 8.86 4.03609 8.86 3.72737C8.86 3.41866 8.60331 3.16839 8.28667 3.16839H4.05333C3.73928 3.16837 3.48365 3.4147 3.48 3.72087C3.47998 4.03066 3.73561 4.28279 4.05333 4.28635Z"
                fill="white"
              />
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
