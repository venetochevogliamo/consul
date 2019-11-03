class Admin::BudgetInvestmentAuditsController < Admin::BaseController
  def show
    investment = Budget::Investment.find(params[:budget_investment_id])
    @audit = investment.audits.find(params[:id])

    render "admin/audits/show"
  end
end
