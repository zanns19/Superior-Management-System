**Deliverable:** daily accountability workflow.

### Phase 7 — Final polish aur release 1.0
- Empty states, form validation, loading/error feedback aur responsive layout.
- Role access, approval, assignment, accept/query, revision aur report flows manually verify karein.
- Production deployment, environment variables aur initial admin setup document karein.

**Deliverable:** deployable MVP v1.0.0.

## 4. Suggested dashboard layout

### Admin dashboard
- Summary: total staff, pending approvals, schedules awaiting response, open queries, reports due.
- Staff list with staff ID and account status.
- Schedule create/edit area.
- Query and daily report review lists.

### Staff dashboard
- Staff name/ID and account details.
- Today’s duty and upcoming timetable.
- Accept / Raise Query actions and response status.
- Daily report form and submission history.

## 5. MVP acceptance criteria

1. Admin staff account approve karke unique ID assign kar sakta hai.
2. Admin staff-specific timetable publish kar sakta hai.
3. Staff sirf apna timetable dekh kar accept ya query bhej sakta hai.
4. Admin har staff ka acceptance/query dekh sakta hai aur query par schedule revise kar sakta hai.
5. Staff daily duty report bhej sakta hai aur admin use dekh sakta hai.
6. Admin aur staff ke permissions alag hon; staff doosre staff ka private data na dekh sake.
7. Login/logout aur responsive dashboards kaam karein.

## 6. MVP ke baad (v1.1+)

- Email/push notifications, timetable export/print, attendance/geolocation, recurring schedules, analytics, bulk import, multiple campuses aur advanced permissions.

## 7. Abhi decide karne wale product rules

- Staff ID ka format (misal: `SUP-0001`) aur unique rehne ka rule.
- Timetable weekly hoga ya date-based; dono support karne hain ya pehle ek.
- Daily report mein required fields kya hongi (misal: completed/not completed, note, issue).
- Query par admin response deadline aur revised schedule ke baad staff ki re-acceptance zaroori hogi ya nahi.
- Pehle version mein in-app status/notification kafi hai; external email/SMS ko baad mein add kiya ja sakta hai.