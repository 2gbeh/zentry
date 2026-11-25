"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/shadcn/ui/button"
import {
  DashboardCard,
  DashboardContainer,
  DashboardContent,
} from "@/components/species/dashboard/ui/dashboard-container"

export default function MainNotFound() {
  const path = usePathname()
  const router = useRouter()

  const renderMessage = (
    <>
      It appears the requested resource{" "}
      <Link href={path} className="link-text">
        {path}
      </Link>{" "}
      no longer exist or has been moved temporarily
    </>
  )

  return (
    <DashboardContainer title="Not Found">
      <DashboardContent>
        <DashboardCard title="[404] Page Not Found" description={renderMessage}>
          <div className="mt-4">
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  )
}
