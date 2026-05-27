import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Logo area */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xs">
          IITB
        </div>
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xs">
          GERP
        </div>
      </div>

      {/* Above-card label */}
      <p className="text-sm text-muted-foreground text-center mb-2">Secure</p>

      {/* Login Card */}
      <Card>
        <CardHeader>
          <CardTitle>Login to your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="userid">
            <TabsList variant="line">
              <TabsTrigger value="userid">User ID</TabsTrigger>
            </TabsList>
            <TabsContent value="userid">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="login-username">Username</Label>
                  <Input
                    type="text"
                    id="login-username"
                    placeholder="Username"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    type="password"
                    id="login-password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <Label htmlFor="login-activity">Activity</Label>
                  <NativeSelect id="login-activity" className="w-full">
                    <NativeSelectOption value="Tender">
                      Tender
                    </NativeSelectOption>
                  </NativeSelect>
                </div>
                <Alert variant="destructive">
                  <AlertTitle>
                    Note : Username and Password are case Sensitive
                  </AlertTitle>
                </Alert>
                <div className="flex items-center gap-2">
                  <Checkbox id="chkbox" />
                  <Label htmlFor="chkbox">Enable Virtual Keyboard</Label>
                </div>
                <Button variant="link" className="px-0">
                  Forgot Password?
                  {/* TODO: wire to forgot password handler */}
                </Button>
                <Button variant="default" className="w-full">
                  Login
                  {/* TODO: wire to btnLogin handler */}
                </Button>
                <div id="login-left-error-msg" className="hidden" />
                <div id="captchaError" className="hidden" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
