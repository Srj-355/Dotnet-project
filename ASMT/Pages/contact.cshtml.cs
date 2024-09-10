using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ASMT.Pages
{
    public class contactModel : PageModel
    {
        [BindProperty]
        public required ContactFormModel ContactForm { get; set; }
        public bool MessageSent { get; set; }

        public required string DName { get; set; }

        public required string DProgram { get; set; }

        public required string DMobile { get; set; }

        public required string DEmail { get; set; }

        public required string DCollege { get; set; }

        

        public required string DAddress { get; set; }

        public required string DMessage { get; set; }

        public void OnGet()
        {
            MessageSent = false;

            
        }

        public void OnPost()
        {
            if (ModelState.IsValid)
            {
                if(ContactForm.Name.Equals("sar", StringComparison.OrdinalIgnoreCase))
                {
                    string fname = "saroj ";
                    string lname = "Mandal";

                    DName = String.Concat(fname,lname);

                }
                else
                {
                    DName = ContactForm.Name;
                }
           
                DProgram = ContactForm.Program;
                DMobile = ContactForm.Mobile;
                DEmail = ContactForm.Email;
                DCollege = ContactForm.College;
                DAddress = ContactForm.Address;
                DMessage = ContactForm.Message;
                MessageSent = true;

            }
        }

        public class ContactFormModel
        {
            [Required]
            public required string Name { get; set; }

            [Required]
            public required string Program { get; set; }

            [Required]
            public required string Mobile { get; set; }

            [Required]
            public required string Email { get; set; }

            [Required]
            public required string College { get; set; }

            [Required]

            public required string Address { get; set; }

            public required string Message { get; set; }
        }


    }
}
