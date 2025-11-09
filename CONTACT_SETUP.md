# Contact Page Setup Guide

This guide will help you configure the contact form and appointment scheduling features on your website.

## 🎯 Overview

The contact page includes: - ✅ Professional contact form with email delivery - ✅ Appointment scheduling integration - ✅ Multiple contact methods (email, phone, social) - ✅ FAQ section - ✅ Responsive design - ✅ Email validation and spam protection

## 📧 Step 1: Configure Web3Forms (Contact Form)

Web3Forms is a free service that handles form submissions without requiring a backend server.

### Setup Instructions:

1.  **Create a Free Web3Forms Account:**
    -   Visit: https://web3forms.com/
    -   Click "Get Started for Free"
    -   Sign up with your email (othercontent21\@gmail.com)
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
    -   Set **Recipient Email**: `othercontent21@gmail.com`
    -   Enable **Email Notifications**
    -   Optional: Customize email template
    -   Optional: Enable spam filtering

### Features Included:

-   ✅ Automatic email delivery to othercontent21\@gmail.com
-   ✅ Spam protection (honeypot + reCAPTCHA optional)
-   ✅ Form validation
-   ✅ Success/error messages
-   ✅ No backend code required
-   ✅ Free up to 250 submissions/month

## 📅 Step 2: Configure Google Calendar Appointments

The page includes a placeholder link for appointment scheduling. You have two options:

### Option A: Google Calendar Appointment Schedule (Recommended)

1.  **Create an Appointment Schedule:**
    -   Go to: https://calendar.google.com/
    -   Login with: othercontent21\@gmail.com
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
2.  Connect your Google Calendar (othercontent21\@gmail.com)
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

Update the social media links at the bottom (lines 495-503): - LinkedIn: Replace `https://linkedin.com` with your profile - GitHub: Replace `https://github.com` with your profile - Email: Already set to `othercontent21@gmail.com`

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
    -   Check othercontent21\@gmail.com for the test message
2.  **Test Live:**
    -   After deploying, visit your live site
    -   Test the form again
    -   Verify emails are received

## 🔒 Security Features

The contact form includes: - ✅ Email validation - ✅ Required field validation - ✅ Spam protection via Web3Forms - ✅ No sensitive data stored in code - ✅ HTTPS encryption (via Firebase Hosting)

## 📞 Email Notifications

With Web3Forms, you'll receive emails with: - Customer name - Email address - Phone number - Company name - Service interest - Project timeline - Message content - Submission timestamp

## 🆘 Troubleshooting

### Form Not Sending Emails

1.  Check that Web3Forms access key is correct
2.  Verify recipient email in Web3Forms dashboard
3.  Check spam folder
4.  Verify Web3Forms account is active

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

## 📧 Support

If you need help: - Web3Forms Docs: https://docs.web3forms.com/ - Google Calendar Help: https://support.google.com/calendar - Quarto Documentation: https://quarto.org/docs/

------------------------------------------------------------------------

**Important:** Never commit your Web3Forms access key to public repositories. Keep it in the contact.qmd file which should be in your .gitignore if you're concerned about security, or use environment variables for production.
