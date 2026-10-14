export interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  timeline?: string;
  message: string;
}

/**
 * Sends a project inquiry directly to Eke-Abasi Isangifi's email (eisangifi@gmail.com)
 * without opening the client's email client or requiring client authentication.
 */
export async function sendDirectInquiry(data: InquiryData): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim() || 'Not provided',
      service: data.service || 'General Inquiry',
      timeline: data.timeline || 'Flexible',
      message: data.message.trim() || 'Client requested direct project consultation.',
      _subject: `New Project Inquiry: ${data.service || 'Direct Inquiry'} — ${data.name.trim()}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.email.trim(),
    };

    const response = await fetch('https://formsubmit.co/ajax/eisangifi@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true };
    }

    const resJson = await response.json().catch(() => null);
    return {
      success: false,
      message: resJson?.message || `Server responded with status ${response.status}`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Network request failed',
    };
  }
}
