import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Chip } from "@heroui/chip";
import { Card, CardBody , CardHeader , CardFooter} from "@heroui/card";
// import {Card, CardBody , CardHeader , CardFooter, Image, Button} from "@heroui/react"
import { Image } from "@heroui/image";
import { Button } from "@heroui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const history = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: new Date(2024, 1, i + 1).toISOString(),
    status: Math.random() > 0.1, 
  }));
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Flune&nbsp;</span>
        <span className={title({ color: "violet" })}>market&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Welcome to our E-Commerce | Community.
        </div>
      </div>
      
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Log In
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div>
        or <Link rel="stylesheet" href={siteConfig.links.docs} title="สร้างบัญชีใหม่">create account</Link>
      </div>
      <div className="mt-10 mb-20"> 
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <div><Chip className="mr-3" color="danger" size="md">อัพเดต</Chip>
           รองรับระบบชำระเงินออนไลน์ด้วยคิวอาร์โค้ด
          </div>
        </Snippet>
      </div>
      <div className="w-full">
        <Card className="bg-background/60 dark:bg-default-100/50 sm:flex shadow-lg p-5">
          ff
        </Card>
      </div>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 mb-20 px-8 mt-20">
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Projects</p>
            <h4 className="text-black font-medium text-2xl">Apple QrPromptpay</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://heroui.com/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">ปัญหา QRcode Promptpay จะหมดไป.</p>
              <p className="text-black text-tiny">ผมจะแชร์ให้คุณลองใช้.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Projects</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://heroui.com/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="bg-background/60 dark:bg-default-100/50 sm:flex shadow-lg p-5 border">
        <div>Server Monitor</div>
        <div className="mt-3 flex justify-between sm:flex-row flex-col gap-4">
          <Card
            isBlurred
            className=" bg-background/60 dark:bg-default-100/50 max-w-[1010px] sm:flex shadow-lg"
            shadow="sm"
          ><CardBody>
            <div className="flex justify-between text-xs">
                <span>FrontEND</span>
                <span>Optional</span>
            </div>
            <div className='grid grid-cols-[repeat(20,_1fr)] gap-[3px]'>
              {history.map((record) => (
                <Popover key={record.id} showArrow backdrop="blur" offset={5} placement="top">
                  <PopoverTrigger>
                    <div
                      className={`h-8 w-3 rounded-sm cursor-pointer ${record.status ? "bg-green-500" : "bg-red-500"}`}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="p-2 text-sm">
                      <p><strong>Date:</strong> {record.date}</p>
                      <p><strong>Status:</strong> {record.status ? "Operational ✅" : "Down ❌"}</p>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span>Past 20 Days</span>
                <span>now ^</span>
              </div>
            </CardBody>
          </Card>
          
          <Card
            isBlurred
            className=" bg-background/60 dark:bg-default-100/50 max-w-[1010px] sm:flex shadow-lg"
            shadow="sm"
          ><CardBody>
            <div className="flex justify-between text-xs">
                <span>BackEND</span>
                <span>Optional</span>
            </div>
            <div className='grid grid-cols-[repeat(20,_1fr)] gap-[3px]'>
              {history.map((record) => (
                <Popover key={record.id} showArrow backdrop="blur" offset={5} placement="top">
                  <PopoverTrigger>
                    <div
                      className={`h-8 w-3 rounded-sm cursor-pointer ${record.status ? "bg-green-500" : "bg-red-500"}`}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="p-2 text-sm">
                      <p><strong>Date:</strong> {record.date}</p>
                      <p><strong>Status:</strong> {record.status ? "Operational ✅" : "Down ❌"}</p>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span>Past 20 Days</span>
                <span>now ^</span>
              </div>
            </CardBody>
          </Card>
          </div>
      </Card>
    </section>
  );
}
