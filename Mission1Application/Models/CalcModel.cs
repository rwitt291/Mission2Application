using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission1Application.Models
{
    public class CalcModel
    {

        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal groupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal exams { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public int intex { get; set; }

    }
}
