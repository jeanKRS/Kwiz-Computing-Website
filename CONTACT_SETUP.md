# Contact Page Setup Guide

This guide will help you configure the contact form and appointment scheduling features on your website.

## 🎯 Overview

The contact page includes: - ✅ Professional contact form with email delivery - ✅ Appointment scheduling integration - ✅ Multiple contact methods (email, phone, social) - ✅ FAQ section - ✅ Responsive design - ✅ Email validation and spam protection

## 📧 Step 1: Activate FormSubmit (Contact Form)

FormSubmit is a free service that handles form submissions with ZERO configuration - just your email!

### ✅ Already Configured!

1.  **Create a Free Web3Forms Account:**
    -   Visit: https://web3forms.com/
    -   Click "Get Started for Free"
    -   Sign up with your email (jeankwizera\@gmail.com)
2.  **Get Your Access Key:**
    -   After signing up, you'll receive an Access Key
    -   It looks like: `abcd1234-5678-90ef-ghij-klmnopqrstuv`
3.  **Add the Access Key to Your Website:**
    -   Open: `contact.qmd`
    -   Find line 400: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
    -   Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
    -   Example: `<input type="hidden" name="access_key" value="abcd1234-5678-90ef-ghij-klmnopqrstuv">`
4.  **Configure Email Settings in Web3Forms Dashboard:**
    -   Login to https://web3forms.com/
    -   Set **Recipient Email**: `jeankwizera@gmail.com`
    -   Enable **Email Notifications**
    -   Optional: Customize email template
    -   Optional: Enable spam filtering


### First-Time Activation (One-Time Only):

1. **Submit a Test Form:**
   - Visit your contact page
   - Fill out the form with test data
   - Click "Send Message"

2. **Verify Your Email:**
   - Check `jeankwizera@gmail.com` inbox
   - You'll receive a verification email from FormSubmit
   - Click the activation link
   - **That's it!** The form is now active

3. **All Future Submissions:**
   - Will arrive directly in your inbox
   - No further verification needed

### Features Included:
- ✅ Automatic email delivery to jeankwizera\@gmail.com
- ✅ Spam protection (honeypot + reCAPTCHA optional)
- ✅ Automatic email delivery to jeankwizera@gmail.com
- ✅ No API keys or registration required
- ✅ Form validation
- ✅ Success/error messages
- ✅ No backend code required
- ✅ Free up to 250 submissions/month
- ✅ Completely FREE unlimited submissions
- ✅ Spam protection included
- ✅ Works immediately after first verification

## 📅 Step 2: Configure Google Calendar Appointments

The page includes a placeholder link for appointment scheduling. You have two options:

### Option A: Google Calendar Appointment Schedule (Recommended)

1.  **Create an Appointment Schedule:**
    -   Go to: https://calendar.google.com/
    -   Login with: jeankwizera\@gmail.com
    -   Click the "+" next to "Other calendars"
    -   Select "Create new calendar" or use your existing calendar
    -   Go to Settings → Appointment schedules
    -   Click "Create"
2.  **Configure Your Appointment Schedule:**
    -   **Name**: "Free Consultation"
    -   **Duration**: 30 minutes
    -   **Location**: Google Meet (or Phone)
    -   **Availability**:
        -   Monday-Friday: 9:00 AM - 6:00 PM (EAT)
        -   Saturday: 10:00 AM - 2:00 PM (EAT)
    -   **Booking window**: 1 week in advance
    -   **Buffer time**: 15 minutes between meetings
3.  **Get Your Booking Link:**
    -   After creating, click "Get booking page link"
    -   Copy the URL (looks like: `https://calendar.google.com/calendar/appointments/...`)
4.  **Update contact.qmd:**
    -   Open: `contact.qmd`
    -   Find line 380: `<a href="https://calendar.google.com/..."`
    -   Replace the URL with your actual booking link

### Option B: Use Calendly (Alternative)

If you prefer Calendly:

1.  Create free account at https://calendly.com/
2.  Connect your Google Calendar (jeankwizera\@gmail.com)
3.  Create a "30-minute Consultation" event type
4.  Copy your Calendly link
5.  Replace the URL in contact.qmd line 380

## 🎨 Customization Options

### Update Business Hours

Edit the business hours in contact.qmd (lines 343-346):

``` html
Monday - Friday: 9:00 AM - 6:00 PM (EAT)<br>
Saturday: 10:00 AM - 2:00 PM (EAT)<br>
Sunday: Closed
```

### Add Phone Number

If you want to display a phone number, edit line 353:

``` html
<strong>Phone</strong>
+254 XXX XXX XXX
```

### Update Social Links

Update the social media links at the bottom (lines 495-503): - LinkedIn: Replace `https://linkedin.com` with your profile - GitHub: Replace `https://github.com` with your profile - Email: Already set to `jeankwizera@gmail.com`

### Customize Form Fields

You can add/remove form fields by editing the form section (lines 405-457).

## 🚀 Building and Deploying

After configuration, build your site:

``` bash
# Render the site
quarto render

# Preview locally
quarto preview

# Deploy to Firebase
firebase deploy
```

## 📊 Testing the Contact Form

1.  **Test Locally:**
    -   Run `quarto preview`
    -   Visit the contact page
    -   Fill out and submit the form
    -   Check jeankwizera\@gmail.com for the test message
2.  **Test Live:**
    -   After deploying, visit your live site
    -   Test the form again
    -   Verify emails are received

## 🔒 Security Features

The contact form includes: - ✅ Email validation - ✅ Required field validation - ✅ Spam protection via Web3Forms - ✅ No sensitive data stored in code - ✅ HTTPS encryption (via Firebase Hosting)

## 📞 Email Notifications

<<<<<<< HEAD
With Web3Forms, you'll receive emails with: - Customer name - Email address - Phone number - Company name - Service interest - Project timeline - Message content - Submission timestamp
=======
With FormSubmit, you'll receive emails with:
- Customer name
- Email address
- Phone number
- Company name
- Service interest
- Project timeline
- Message content
- Submission timestamp
- Formatted in a clean table layout
>>>>>>> f8dc2991b3675ed0d100367e818df77f46d20e5a

## 🆘 Troubleshooting

### Form Not Sending Emails
<<<<<<< HEAD

1.  Check that Web3Forms access key is correct
2.  Verify recipient email in Web3Forms dashboard
3.  Check spam folder
4.  Verify Web3Forms account is active
=======
1. **First submission?** Check `jeankwizera@gmail.com` for verification email
2. Click the activation link in the verification email
3. Check spam/junk folder for both verification and form submissions
4. Try submitting the form again after verification
5. Ensure your internet connection is stable
>>>>>>> f8dc2991b3675ed0d100367e818df77f46d20e5a

### Appointment Link Not Working

1.  Ensure Google Calendar appointment schedule is published
2.  Verify the URL is copied correctly
3.  Check that calendar is set to "public" for booking

### Styling Issues

1.  Clear browser cache
2.  Run `quarto render` to rebuild
3.  Check for console errors in browser DevTools

## 📈 Analytics

The site already has Google Analytics configured. You can track: - Form submissions (via event tracking) - Appointment clicks - Page views - User engagement

To add custom tracking for form submissions, you can enhance the JavaScript in contact.qmd to send events to Google Analytics.

## 💡 Tips

1.  **Respond Quickly**: Try to respond within 24 hours to maintain professional image
2.  **Test Regularly**: Submit test forms monthly to ensure everything works
3.  **Check Spam Folder**: Sometimes legitimate emails get flagged
4.  **Use Templates**: Create email templates for common responses
5.  **Track Metrics**: Monitor form submission rates and conversion

## 🔄 Next Steps

1.  ✅ Get Web3Forms access key
2.  ✅ Create Google Calendar appointment schedule
3.  ✅ Update contact.qmd with your keys/links
4.  ✅ Test the form locally
5.  ✅ Deploy to production
6.  ✅ Send a test submission
7.  ✅ Monitor emails and appointments

1. ✅ Form is already configured for jeankwizera@gmail.com
2. ⏳ Submit test form to activate FormSubmit (one-time)
3. ⏳ Verify email address via activation link
4. ⏳ Create Google Calendar appointment schedule
5. ⏳ Update contact.qmd with calendar link (line 380)
6. ✅ Deploy to production
7. ✅ Monitor emails and appointments

## 📧 Support

If you need help:
- FormSubmit Docs: https://formsubmit.co/
- Google Calendar Help: https://support.google.com/calendar
- Quarto Documentation: https://quarto.org/docs/
>>>>>>> f8dc2991b3675ed0d100367e818df77f46d20e5a

------------------------------------------------------------------------

**Note:** FormSubmit requires no API keys or sensitive credentials. The form posts directly to FormSubmit's service with your email address, making it completely safe for public repositories.
