import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PortalLayout } from "./layouts/PortalLayout"
import HomePage from "./pages/HomePage"
import TenderFreeViewPage from "./pages/TenderFreeViewPage"
import HotTendersPage from "./pages/HotTendersPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import SystemRequirementsPage from "./pages/SystemRequirementsPage"
import CircularsPage from "./pages/CircularsPage"
import NVAccessPage from "./pages/NVAccessPage"
import DetailsPage from "./pages/DetailsPage"
import LoginPage from "./pages/LoginPage"
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage"
import DisclaimerPage from "./pages/DisclaimerPage"
import GlossaryPage from "./pages/GlossaryPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import DataPrivacyPolicyPage from "./pages/DataPrivacyPolicyPage"
import BlacklistedUsersPage from "./pages/BlacklistedUsersPage"

/**
 * PreviewApp — standalone router for the GERP portal redesign preview.
 * Mounted under /preview/* so existing routes remain untouched.
 */
export default function PreviewApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/preview" element={<HomePage />} />
          <Route
            path="/preview/tender-free-view"
            element={<TenderFreeViewPage />}
          />
          <Route path="/preview/hot-tenders" element={<HotTendersPage />} />
          <Route path="/preview/about" element={<AboutPage />} />
          <Route path="/preview/contact" element={<ContactPage />} />
          <Route
            path="/preview/system-requirements"
            element={<SystemRequirementsPage />}
          />
          <Route path="/preview/circulars" element={<CircularsPage />} />
          <Route path="/preview/nv-access" element={<NVAccessPage />} />
          <Route path="/preview/details" element={<DetailsPage />} />
          <Route path="/preview/login" element={<LoginPage />} />
          {/* Legal / Policy pages */}
          <Route
            path="/preview/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/preview/disclaimer" element={<DisclaimerPage />} />
          <Route path="/preview/glossary" element={<GlossaryPage />} />
          <Route
            path="/preview/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="/preview/data-privacy-policy"
            element={<DataPrivacyPolicyPage />}
          />
          <Route
            path="/preview/blacklisted-users"
            element={<BlacklistedUsersPage />}
          />
        </Route>
        {/* Redirect root and unknown routes to /preview */}
        <Route path="/" element={<Navigate to="/preview" replace />} />
        <Route path="*" element={<Navigate to="/preview" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
