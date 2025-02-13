//=============================================================================
// Heal on Level Up
// by Shaz
// Last Update: 2015.10.25
//=============================================================================

/*:
 * @plugindesc 升级恢复血量和魔法
 * @author Shaz
 *
 * @param All HP
 * @text 所有角色治疗HP
 * @desc Heal HP for all party members (Y/N)
 * @default Y
 *
 * @param All MP
 * @text 所有角色恢复MP
 * @desc Heal MP for all party members (Y/N)
 * @default Y
 *
 * @param All States
 * @text 取消所有角色状态
 * @desc Remove states for all party members (Y/N)
 * @default Y
 *
 * @help 该插件不提供插件命令
 *
 * 如果你只想把一些演员设置为具有上述属性，可以添加
 * 将以下标签添加到备注中。
 * <LUHealHP>
 * <LUHealMP>
 * <LUHealStates>
 */

(function() {

  var parameters = PluginManager.parameters('HealOnLevelUp');
  var healHP = (parameters['All HP'].toUpperCase() || '') === 'Y';
  var healMP = (parameters['All MP'].toUpperCase() || '') === 'Y';
  var healStates = (parameters['All States'].toUpperCase() || '') === 'Y';

  var _Game_Actor_levelUp = Game_Actor.prototype.levelUp;
  Game_Actor.prototype.levelUp = function() {
    _Game_Actor_levelUp.call(this);

    if (healHP || this.actor().meta.LUHealHP) {
      this._hp = this.mhp;
    }

    if (healMP || this.actor().meta.LUHealMP) {
      this._mp = this.mmp;
    }

    if (healStates || this.actor().meta.LUHealStates) {
      this.clearStates();
    }
  };


})();