import React from 'react'
import { Button } from "@/components/ui/button"
import backg from "@/assets/bg.jpg"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
/* Importation de la police depuis Google Fonts */






function index() {
    return (
        <div className="w-screen h-screen flex items-center justify-center p-3 bg-[url('@/assets/bg.jpg')] bg-cover bg-no-repeat bg-center ">


            <div className=' border shadow-2xl w-[90vw] sm:w-[80vw] min-h-[70vh] max-w-[600px] bg-white'>
                <div className="flex flex-col w-[100%]  p-3">
                    <div className=' flex items-center justify-center  border-b-2 border-solid border-gray-300 min-h-[200px] bg-opacity-10 '>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide text-center font-sans bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg animate-bounce">
                            WELCOME
                        </h1>

                    </div>
                    <div className=' '>
                        <Tabs defaultValue="account" className="w-[100%] text-center">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Register</TabsTrigger>
                                <TabsTrigger value="password">Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="name">Username</Label>
                                            <Input id="name" defaultValue="Pedro Duarte" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Password</Label>
                                            <Input type="password" id="username" defaultValue="@peduarte" />
                                        </div>
                                        <Button className="w-[100%]"> Sign up</Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="name">Email</Label>
                                            <Input id="name" defaultValue="Pedro Duarte" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Username</Label>
                                            <Input id="username" defaultValue="@peduarte" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Password</Label>
                                            <Input id="username" defaultValue="@peduarte" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Confirm Password</Label>
                                            <Input id="username" defaultValue="@peduarte" />
                                        </div>
                                        <Button className="w-[100%]"><a href="/chat">Sign up</a> </Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
